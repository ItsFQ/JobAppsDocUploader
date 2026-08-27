# JobDocs Uploader - Google Apps Script WebApp

A lightweight Google Apps Script app for uploading job application documents into segregated Google Drive folders.

## Overview

This project provides a small web form where users can:

- choose a document type
- select a file
- upload it to the correct Google Drive folder
- keep resumes, cover letters, and job descriptions organized in separate locations

The app is built with:

- Google Apps Script (`Code.gs`)
- HTML/CSS/JavaScript (`index.html`)

## Project structure

- `Code.gs` — backend logic for file uploads and folder handling
- `index.html` — frontend interface for selecting a document type and uploading a file

## How it works

The uploader accepts a document type and a file, then sends it to one of three configured Google Drive folders:

- Resume
- Cover Letter
- Job Description

Each type maps to a different folder ID defined in `Code.gs`.

## Setup

### 1. Create your Google Drive folders

Create three folders in Google Drive, for example:

- Resume
- Cover Letter
- Job Description

### 2. Update folder IDs in `Code.gs`

At the top of `Code.gs`, replace these placeholders:

```js
const RESUME_FOLDER_ID = '<INSERT_DRIVEFOLDER_ID>';
const COVER_FOLDER_ID = '<INSERT_DRIVEFOLDER_ID>'
const JOB_DESC_FOLDER_ID = '<INSERT_DRIVEFOLDER_ID>'
```

Use the actual folder IDs from your Google Drive URLs.

Example:

```text
https://drive.google.com/drive/folders/9ZxQwP2mN4vR7kL1cH8tY6fD3sA5bJ9m
```

The folder ID is:

```text
9ZxQwP2mN4vR7kL1cH8tY6fD3sA5bJ9m
```

### 3. Deploy the app as a web app

In Google Apps Script:

1. Open the project
2. Click Deploy > New deployment
3. Choose Web app
4. Set your preferred permissions
5. Deploy and copy the web app URL

### 4. Open the app in a browser

Visit the deployed URL and upload a file.

## Usage

1. Select the document type from the dropdown
2. Choose a file
3. Click Upload file
4. The file is saved in the matching Google Drive folder

## Use Case

This project is provided as-is for personal or small-project use.

## Screenshots
<img width="800" height="800" alt="image" src="https://github.com/user-attachments/assets/3a524e3f-417f-4b5a-b518-68cada2218d0" />
<img width="800" height="800" alt="image" src="https://github.com/user-attachments/assets/675946f4-756b-4b7d-a1de-bc0f38d83702" />
<img width="800" height="800" alt="image" src="https://github.com/user-attachments/assets/1a8212e1-2585-4847-a92b-4097190029bb" />
<img width="1500" height="300" alt="image" src="https://github.com/user-attachments/assets/65868e53-ad23-4c1b-a347-b79bb80e450f" />


