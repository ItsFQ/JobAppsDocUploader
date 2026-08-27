const RESUME_FOLDER_ID = '<INSERT_DRIVEFOLDER_ID>';
const COVER_FOLDER_ID = '<INSERT_DRIVEFOLDER_ID>'
const JOB_DESC_FOLDER_ID = '<INSERT_DRIVEFOLDER_ID>'

function doGet(){
  let output = HtmlService.createTemplateFromFile('index')
  return output.evaluate();
}

function doUpload(form) {
  myFileUpload = form.myFile;
  myFileType = form.fileType;

  let resumeFolder = DriveApp.getFolderById(RESUME_FOLDER_ID);
  let coverFolder = DriveApp.getFolderById(COVER_FOLDER_ID);
  let jobDescFolder = DriveApp.getFolderById(JOB_DESC_FOLDER_ID);

  switch(myFileType) {
    case 'Resume':
      resumeFolder.createFile(myFileUpload);
      return myFileUpload.getName() + ' is uploaded to ' + resumeFolder.getName()
    case 'Cover Letter':
      coverFolder.createFile(myFileUpload);
      return myFileUpload.getName() + ' is uploaded to ' + coverFolder.getName()
     case 'Job Description':
      jobDescFolder.createFile(myFileUpload);
      return myFileUpload.getName() + ' is uploaded to ' + jobDescFolder.getName()
    default:
      throw new Error('Unknown Type');
  }
}