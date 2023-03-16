export interface Table2 {
        "visitId": number,
        "workshopId": number,
        "surveyorId": number,
        "rcNumber": string,
        "defaulterName": string,
        "matterName": string,
        "purposeOfVisit": string,
        "visitStatus": string,
        "dateTime": string,
        "latitude": string,
        "longitude": string,
        "deviceId": string,
        "address": string,
        "imageUrl":string
}
export interface Status{
  name:string
}
export interface VisitorsPost{
        "rcNumber":string,
        "defaulterName":string,
        "matterName":string,
        "purposeOfVisit":string,
        "surveyorId":number
}