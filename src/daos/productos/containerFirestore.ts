// import ContainerFirestone from '../../api/productos/services'

// class ProdDaoFirestore extends ContainerFirestone {
//     constructor(){
//       super('productos')
//       this.id = 0
//       this.checkId()
//     }
  
//     // Chequea para obtener el ultimo ID y asignarlo al id local (this.id)
//     async checkId(){
//       let users = await this.getAll()
  
//       if(users.length > 0) {
  
//         this.id = parseInt(users[users.length - 1].id) + 1
//       }
//     }
  
//     saveUser(user){
//       if(user){
//         console.log(user)
//         this.save(user, this.id)
//         // console.log(this.id)
//         this.id++
//         return user
//       } else {
//         return 'Not saved'
//       }
//     }
// }

// export default ProdDaoFirestore;