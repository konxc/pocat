# 🎬 YouTube Import Flow Diagram - Pocat

## 📊 Complete System Flow

```mermaid
sequenceDiagram
    participant U as User
    participant F as Frontend
    participant API as Backend API
    participant DB as Database
    participant VP as Video Processor
    participant FS as File System

    Note over U,FS: YouTube Import Process Flow

    U->>F: 1. Paste YouTube URL
    U->>F: 2. Click Import button
    
    F->>F: 3. Validate URL
    F->>F: 4. Set loading state
    Note over F: setIsImporting(true)
    
    F->>API: 5. POST /v2/projects
    Note over F,API: Request payload with URL
    
    API->>VP: 6. getVideoInfo(youtubeUrl)
    VP-->>API: 7. Video metadata
    Note over VP,API: title, duration, thumbnail
    
    API->>DB: 8. Create VideoProject
    DB-->>API: 9. Project created
    
    API->>VP: 10. downloadVideoAsync()
    Note over API,VP: Background process
    API-->>F: 11. Immediate response
    Note over API,F: projectId and status
    
    F->>F: 12. Update video state
    Note over F: Show thumbnail + loading
    F->>U: 13. Display progress
    
    loop Every 2 seconds
        F->>API: 14. GET download-status
        API->>DB: 15. Check project status
        DB-->>API: 16. Current status
        API-->>F: 17. Status response
        F->>U: 18. Update progress
    end
    
    par Background Download
        VP->>VP: 19. Try yt-dlp download
        alt Success
            VP->>FS: 20. Save video file
            FS-->>VP: 21. File saved
        else Failure
            VP->>VP: 22. Try ytdl-core
            VP->>FS: 23. Save video file
        end
        VP->>DB: 24. Update status completed
    end
    
    F->>API: 25. GET download-status
    API->>DB: 26. Check status
    DB-->>API: 27. readyForEditing true
    API-->>F: 28. Download complete
    
    F->>F: 29. Switch to stream URL
    Note over F: sourceType backend-stream
    F->>U: 30. Video ready for editing
```

## 🏗️ Architecture Components

```mermaid
graph TB
    subgraph "Frontend Layer"
        UI[User Interface]
        VS[Video State]
        AC[API Client]
    end
    
    subgraph "Backend Layer"
        RT[Routes Handler]
        CT[Projects Controller]
        VP[Video Processor]
    end
    
    subgraph "Data Layer"
        DB[(Database)]
        FS[(File System)]
        CH[(Cache)]
    end
    
    subgraph "External"
        YT[YouTube API]
        DL[Downloaders]
    end
    
    UI --> VS
    VS --> AC
    AC --> RT
    RT --> CT
    CT --> VP
    CT --> DB
    VP --> YT
    VP --> DL
    VP --> FS
    VP --> CH
    DB --> CH
    FS --> CH
```

## 🔄 State Transitions

```mermaid
stateDiagram-v2
    [*] --> Idle
    
    Idle --> Importing : User clicks Import
    Importing --> Validating : URL validation
    Validating --> Creating : API call
    Creating --> Downloading : Project created
    Downloading --> Polling : Background starts
    
    state Downloading {
        [*] --> YtDlp
        YtDlp --> YtdlCore : Fallback
        YtdlCore --> Puppeteer : Fallback
        Puppeteer --> Failed : All fail
        YtDlp --> Success : Complete
        YtdlCore --> Success : Complete
        Puppeteer --> Success : Complete
    }
    
    Polling --> Downloading : Status check
    Polling --> Ready : Download complete
    Ready --> Streaming : Video available
    Streaming --> Editing : User starts
    
    Failed --> Idle : Reset
    Editing --> Idle : New import
```

## 📱 Frontend Component Flow

```mermaid
flowchart LR
    subgraph "EditorView"
        A[URL Input]
        B[Import Button]
        C[Video Player]
    end
    
    subgraph "App State"
        D[youtubeLink]
        E[isImporting]
        F[videoState]
    end
    
    subgraph "Services"
        G[createProject]
        H[getStatus]
    end
    
    A --> D
    B --> E
    E --> G
    G --> H
    H --> F
    F --> C
```

## 🗄️ Database Schema

```mermaid
erDiagram
    VIDEO_PROJECTS {
        int id PK
        int userId FK
        string title
        string youtubeUrl
        text videoMetadata
        int duration
        string thumbnailUrl
        string status
        string videoFilePath
        datetime createdAt
        datetime updatedAt
    }
    
    VIDEO_REFERENCES {
        int id PK
        string youtubeUrl
        string filePath
        int referenceCount
        datetime createdAt
    }
    
    CLIPS {
        int id PK
        int videoProjectId FK
        string title
        float startTime
        float endTime
        string outputUrl
        string status
        datetime createdAt
    }
    
    VIDEO_PROJECTS ||--o{ CLIPS : "has many"
    VIDEO_PROJECTS }o--|| VIDEO_REFERENCES : "references"
```

## 🚀 Performance Flow

```mermaid
flowchart TD
    A[YouTube URL Input] --> B{Check Cache}
    
    B -->|Hit| C[Instant Access]
    B -->|Miss| D[Start Download]
    
    C --> E[Video Ready]
    
    D --> F{Try yt-dlp}
    F -->|Success| G[Save File]
    F -->|Fail| H{Try ytdl-core}
    
    H -->|Success| G
    H -->|Fail| I{Try Puppeteer}
    
    I -->|Success| G
    I -->|Fail| J[Download Failed]
    
    G --> K[Create Reference]
    K --> L[Update Database]
    L --> E
    
    E --> M[Stream to Frontend]
    M --> N[User Can Edit]
```

## 📊 API Response Structure

```mermaid
graph LR
    subgraph "Create Project"
        A["POST /v2/projects<br/>{success: true<br/>projectId: 123<br/>status: downloading}"]
    end
    
    subgraph "Status Polling"
        B["GET /download-status<br/>{readyForEditing: false<br/>progress: 45<br/>status: downloading}"]
        
        C["GET /download-status<br/>{readyForEditing: true<br/>progress: 100<br/>status: completed}"]
    end
    
    A --> B
    B --> B
    B --> C
```

## 🎯 Error Handling

```mermaid
flowchart TD
    A[Error Occurs] --> B{Error Type}
    
    B -->|Invalid URL| C[URL Error]
    B -->|Network| D[Connection Error]
    B -->|Download Failed| E[Try Fallback]
    B -->|Server Error| F[Server Error]
    
    C --> G[Reset Form]
    D --> H[Retry Option]
    E --> I[Alternative Method]
    F --> J[Support Contact]
    
    H --> A
    I --> A
    G --> K[Return to Idle]
    J --> K
```

## 🔧 Technical Implementation

### **Frontend State Management**
```typescript
// Video state transitions
const [videoState, setVideoState] = useState({
  sourceType: 'youtube',     // Initial state
  thumbnail: videoInfo.thumbnail,
  projectId: projectId
})

// After download complete
setVideoState(prev => ({
  ...prev,
  sourceType: 'backend-stream',  // Switch to stream
  url: `/v2/projects/${projectId}/stream`,
  isPlaying: true
}))
```

### **Backend Download Process**
```typescript
// Background download with fallback
switch (downloader) {
  case 'yt-dlp':
    result = await tryYtDlpDownload(url, projectId, quality)
    break
  case 'ytdl-core':
    result = await tryYtdlCoreDownload(url, projectId, quality)
    break
  case 'auto':
  default:
    result = await downloadVideo(url, projectId, quality)
    break
}
```

### **Polling Mechanism**
```typescript
// Frontend polling every 2 seconds
const pollInterval = setInterval(async () => {
  const statusRes = await getProjectDownloadStatus(backendUrl, projectId)
  
  if (statusRes.success && statusRes.data.readyForEditing) {
    clearInterval(pollInterval)
    // Switch to video stream
    const streamUrl = `${baseUrl}/v2/projects/${projectId}/stream`
    setVideoState(prev => ({ ...prev, url: streamUrl }))
  }
}, 2000)
```

---

**Diagram Version**: 2.0  
**Updated**: December 18, 2025  
**Status**: ✅ GitHub Compatible Mermaid Syntax  
**Components**: All diagrams tested and validated
