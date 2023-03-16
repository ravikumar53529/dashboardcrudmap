export interface Dashboard {
   token:string,
   user:DashboardChild,
   expiresIn:string,
   course:string,
   coursetakenon?:string,
   courseexpiresIn?:string,
   users:number,
   orders:number,
   income:number,
   partners:number,
   dognutData:Doghnut,
   usersdata:{
    "id":string
    "user":string,
    "place":string,
    "orderplaced":string,
    "phonenumber":string
  }[],
  partnersdata:{
    "companyname":string,
    "industry":string,
    "revenue":number,
    "image":string
  }[],
  orderedanddelivered:OrderedandDelivered
}

export interface DashboardChild{
    username:'string'
}

export interface Doghnut{
        labels: string[],
        datasets: [
            {
                data: number[],
                backgroundColor: string[],
                hoverBackgroundColor: string[]
            }]    
}

export interface OrderedandDelivered{
    labels:string[],
    datasets:[
        {
            label: string,
            backgroundColor:string,
            data: number[]
        }
    ]
}

// export interface usersData{
//      {
//         "user":string,
//         "place":string,
//         "orderplaced":string,
//         "phonenumber":string
//       }[]
// }
export interface usersMainData{
    "user":string,
    "place":string,
    "orderplaced":string,
    "phonenumber":string
}