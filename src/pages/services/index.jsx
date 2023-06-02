/* Request - Get all Enquiry Details */
const base_url = '127.0.0.1:8000/api/';
// export async function getEnquiryData() {
// //   const token = getAuthHeader();

//   const response = await fetch(`${base_url}/ERP/reception/`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     //   authorization: token.authorization,
//     }
//   });
//   const json_response = await response.json();
//   console.log(json_response,'jssssssssssssss');
//   if (json_response.error) {
//     if (json_response.error.status === 400) {
//       return { message: "Please fil all the required field!", type: "#FDEDED" };
//     }
//     if (json_response.error.status === 500) {
//       return { message: "Internal Server Error!", type: "#FDEDED" };
//     }
//   } else {
//     return { message: "Data Created!", type: "#EDF7ED" };
//   }
// }

export async function getEnquiryData() {
    fetch('http://localhost:8000/api/ERP/reception/', { method: 'GET' })
      .then(data => data.json()) // Parsing the data into a JavaScript object
      .then(json => alert(JSON.stringify(json))) // Displaying the stringified data in an alert popup
  }
/* Get Request to get payfee student details*/
export async function getPayfeeStudentDetails() {
  //   const token = getAuthHeader();
    const response = await fetch('http://localhost:8000/api/ERP/payfee_student_details/?admission_id=1', { 
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      //   authorization: token.authorization,
      }
    });
    const json_response = await response.json();
    return json_response
  }

/* Get Request to get fee amount*/
export async function getFeeAmount() {
//   const token = getAuthHeader();
  const response = await fetch('http://localhost:8000/api/ERP/genrate_school_fee/?admission_id=1&month=Feb&year=2023', { 
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    //   authorization: token.authorization,
    }
  });
  const json_response = await response.json();
  return json_response
  // if (json_response.error) {
  //   if (json_response.error.status === 400) {
  //     return { message: "Please fil all the required field!", type: "#FDEDED" };
  //   }
  //   if (json_response.error.status === 500) {
  //     return { message: "Internal Server Error!", type: "#FDEDED" };
  //   }
  // } else {
  //   return { message: "Data Created!", type: "#EDF7ED" };
  // }
}

/* Post Request to pay class fee*/
export async function class_fee_payment(amount) {
  //   const token = getAuthHeader();  
    const response = await fetch('http://localhost:8000/api/ERP/class_fee_payment/', { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      //   authorization: token.authorization,
      },
      
      body: JSON.stringify({'fee':amount,'month':'Feb','admission_id':localStorage.getItem("id"),"year":2023}),
    });
    const json_response = await response.json();
    return json_response

  }

  /* Get Request to get month wise fee amount*/
export async function getMonthWiseFeeAmount(classMonthName,id) {
  //   const token = getAuthHeader();
  const response = await fetch('http://localhost:8000/api/ERP/month_wise_total_fee/', { 
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    //   authorization: token.authorization,
    },
    body: JSON.stringify({'month':classMonthName,'admission_id':localStorage.getItem("id"),"year":2023}),
  });
  const json_response = await response.json();
  return json_response
   
  }

  /* Post Request to pay all class fee at a time*/
export async function One_Time_class_Fee_Payment(classMonthName,final_amount) {
  //   const token = getAuthHeader();  
    const response = await fetch('http://localhost:8000/api/ERP/one_time_class_fee_payment/', { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      //   authorization: token.authorization,
      },
      body: JSON.stringify({'month':classMonthName,'admission_id':localStorage.getItem("id"),'paid_amount':final_amount,"year":2023})
    });
    const json_response = await response.json();
    return json_response
  }
  

  ////////////////////////////// Add class Page APIs/////////////////////////
/* Post Request to add class*/
export async function add_class(addclass) {
  //   const token = getAuthHeader();  
    const response = await fetch('http://localhost:8000/api/ERP/class/', { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      //   authorization: token.authorization,
      },
      body: JSON.stringify({'year':addclass.year,'class_name':addclass.class_name,'class_fee':addclass.class_fee,"class_fee_inst":addclass.class_fee_inst}),
    });
    const json_response = await response.json();
    return json_response
  }
/* GET Request to get class*/
export async function getClassDetails() {
  //   const token = getAuthHeader();
    const response = await fetch(`http://localhost:8000/api/ERP/class/?class_name=${localStorage.getItem("class_name")}`, { 
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      //   authorization: token.authorization,
      }
    });
    const json_response = await response.json();
    return json_response
  }

  /////////////////////////////////Add section page////////////////////////////
  /* GET Request to get section*/
export async function getSectionDetails() {
  //   const token = getAuthHeader();
    const response = await fetch('http://localhost:8000/api/ERP/section/', { 
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      //   authorization: token.authorization,
      }
    });
    const json_response = await response.json();
    return json_response
  }
  /* Post Request to add section*/
export async function add_section(addsection) {
  //   const token = getAuthHeader();  
    const response = await fetch('http://localhost:8000/api/ERP/section/', { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      //   authorization: token.authorization,
      },
      body: JSON.stringify({'section_name':addsection.section_name}),
    });
    const json_response = await response.json();
    return json_response
  }
  ///////////////////////////////////Add Hostel Page////////////////////////////////
/* GET Request to get hostel*/
export async function getHostelDetails() {
  //   const token = getAuthHeader();
    const response = await fetch('http://localhost:8000/api/ERP/hostel/', { 
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      //   authorization: token.authorization,
      }
    });
    const json_response = await response.json();
    return json_response
  }
/* Post Request to add hostel*/
export async function add_hostel(addhostel) {
  //   const token = getAuthHeader();  
    const response = await fetch('http://localhost:8000/api/ERP/hostel/', { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      //   authorization: token.authorization,
      },
      body: JSON.stringify({'year':addhostel.year,'hostel_name':addhostel.hostel_name,'hostel_fee':addhostel.hostel_fee,"hostel_fee_inst":addhostel.hostel_fee_inst,'hostel_instruction':addhostel.hostel_instruction}),
    });
    const json_response = await response.json();
    return json_response
  }

  ////////////////////////////Add Bus root Page/////////////////////////
  /* GET Request to get hostel*/
export async function getBusRootDetails() {
  //   const token = getAuthHeader();
    const response = await fetch('http://localhost:8000/api/ERP/busroot/', { 
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      //   authorization: token.authorization,
      }
    });
    const json_response = await response.json();
    return json_response
  }
/* Post Request to add hostel*/
export async function add_busroot(addbusroot) {
  //   const token = getAuthHeader();  
    const response = await fetch('http://localhost:8000/api/ERP/busroot/', { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      //   authorization: token.authorization,
      },
      body: JSON.stringify({'year':addbusroot.year,'bus_name':addbusroot.bus_name,'root_name':addbusroot.root_name,'root_fee':addbusroot.root_fee,'root_inst':addbusroot.root_inst}),
    });
    const json_response = await response.json();
    return json_response
  }

//////////////////////////////Add Extra fee Page/////////////////////////
/* GET Request to get extra fee*/
export async function getExtrafeeDetails() {
  //   const token = getAuthHeader();
    const response = await fetch('http://localhost:8000/api/ERP/extra_fee_structure/', { 
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      //   authorization: token.authorization,
      }
    });
    const json_response = await response.json();
    return json_response
  }

  /* GET Request to get student type*/
export async function getStudentType() {
  //   const token = getAuthHeader();
    const response = await fetch('http://localhost:8000/api/ERP/student_type/', { 
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      //   authorization: token.authorization,
      }
    });
    const json_response = await response.json();
    return json_response
  }
/* Post Request to add extra fee*/
function getMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  // Using the browser's default locale.
  return date.toLocaleString([], { month: 'long' });
}

export async function add_extrafee(addextrafee,months) {
  const date = new Date(months);
  let year=date.getFullYear()
  let month=getMonthName(date.getMonth() + 1)
  let updated_month=month.substring(0, 3);
  //   const token = getAuthHeader();  
    const response = await fetch('http://localhost:8000/api/ERP/extra_fee_structure/', { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      //   authorization: token.authorization,
      },
      body: JSON.stringify({'year':year,'month':updated_month,'fee_name':addextrafee.fee_name,'fee_amount':addextrafee.fee_amount,'class_id':addextrafee.class_id,'student_type_id':addextrafee.student_type_id}),
    });
    const json_response = await response.json();
    return json_response
  }
////////////////////////////////Hostel Extra Fee Page////////////////////////////////

/* GET Request to get Hostel Extra fee*/
export async function getHostelExtrafeeDetails() {
  //   const token = getAuthHeader();
    const response = await fetch('http://localhost:8000/api/ERP/hostel_extra_fee_structure/', { 
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      //   authorization: token.authorization,
      }
    });
    const json_response = await response.json();
    return json_response
  }
/* Post Request to add hostel*/
export async function add_hostel_extrafee(addhostelextrafee,months) {
  const date = new Date(months);
  let year=date.getFullYear()
  let month=getMonthName(date.getMonth() + 1)
  let updated_month=month.substring(0, 3);
  //   const token = getAuthHeader();  
    const response = await fetch('http://localhost:8000/api/ERP/hostel_extra_fee_structure/', { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      //   authorization: token.authorization,
      },
      body: JSON.stringify({'year':year,'month':updated_month,'fee_name':addhostelextrafee.fee_name,'fee_amount':addhostelextrafee.fee_amount,'student_type_id':addhostelextrafee.student_type_id}),
    });
    const json_response = await response.json();
    return json_response
  }
////////////////////////////////Dashboard Page////////////////////////////////

/* GET Request to get dashboard*/
export async function dashboard() {
  //   const token = getAuthHeader();
    const response = await fetch('http://localhost:8000/api/ERP/dashboard/', { 
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      //   authorization: token.authorization,
      }
    });
    const json_response = await response.json();
    return json_response
  }
////////////////////////////////Add Discount Page////////////////////////////////
/* GET Request to get dashboard*/
export async function getStudentDetails() {
  //   const token = getAuthHeader();
    const response = await fetch('http://localhost:8000/api/ERP/admissions_form/', { 
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      //   authorization: token.authorization,
      }
    });
    const json_response = await response.json();
    return json_response
  }

  ////////////////////////////////Discount page///////////////////////////
