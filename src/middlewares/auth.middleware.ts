export async function authMiddleware(req : any, reply: any){

  const apiemail = req.headers['email'];

  if (!apiemail) {

    reply.status(401).send({
      message: 'Email required'
    })
    
  }
}