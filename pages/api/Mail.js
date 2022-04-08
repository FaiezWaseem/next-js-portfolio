export default function handler(req, res) {
    if (req.method === 'POST') {
        // Process a POST request
      } else {
          console.log(req.query)
          if(req.query.email != undefined && req.query.subject != undefined &&  req.query.message != undefined ){
              sendMail(req.query.email , req.query.subject, req.query.message , (response)=>{
                  res.status(200).json(response) 
              })
          }else{
            res.status(200).json({error : "Inproper Request"})
          }

      }
  }



function sendMail(email , subject , message , callback){
    const id = 'AKfycbyopBnPc1gyUU-Hc2lpWGKxYqWEvnAJbXgTtpvnAjCmxBfn2pi-MUYggN9_cblpLrxK'
    const url = `https://script.google.com/macros/s/${id}/exec`; 
    const qs = new URLSearchParams({email: "fazufaiez@gmail.com",subject : subject, msg: "Email : "+email +"\n"+ message, key : 15963});  

      fetch(`${url}?${qs}`, {
        method: "POST",
        body: '' })
          .then(res => res.json())
          .then(e => callback(e) )
          .catch(err =>callback(err))
}

export const config = {
    api: {
      bodyParser: {
        sizeLimit: '6mb',
      },
    },
  }

 