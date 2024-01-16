import  Axios  from 'axios';


import {Url} from '../Url/URL';


export async function PostPuestoSolicitado(pustosSoli){

    await Axios.post(`${Url}PuestoSolicitado`, pustosSoli).then(res=>{

        console.log('Puesto solisitado subido exitosamente');
        }).catch (error=>{
        console.error('Error al subir el puesto', error);
    });

}

//Perfil.........................................................

export async function  PutPerfil(Suscripcion){
    if(Suscripcion?.id){
            
        await Axios.put(`${Url}Profile/${Suscripcion.id}`, Suscripcion).then(res=>{

        console.log('Perfil actualizado exitosamente');
        }).catch (error=>{
        console.error('Error al actualizar el perfil', error);
        })

    }else{
        
        await Axios.post(`${Url}Profile`,Suscripcion).then(res=>{

        console.log('Perfil subido exitosamente');
        }).catch (error=>{
        console.error('Error al subir el perfil', error);
        })
    }
}
//WorkExperience...................................................................................
export async function DeleteWorkExperience(eliminar){

    eliminar.map(async(eliminar)=>{


        if(eliminar.id != null){

        await Axios.delete(`${Url}WorkExperience/${eliminar.id}`).then(res=>{

        console.log('Experiencia eliminado exitosamente');
        }).catch (error=>{
        console.error('Error al eliminar la Experiencia', error);
        })

        
        
        }
    })

}

export async function PutWorkExperience(workExperience){


 

  workExperience.map(async(experiencia)=>{


        if(experiencia.id != null){

        await Axios.put(`${Url}WorkExperience/${experiencia.id}`, experiencia).then(res=>{

        console.log('Experiencia actualizado exitosamente');
        }).catch (error=>{
        console.error('Error al actualizar la Experiencia', error);
        })

        }else{

        await Axios.post(`${Url}WorkExperience`, experiencia).then(res=>{

        console.log('Experiencia subido exitosamente');
        }).catch (error=>{
        console.error('Error al subir la Experiencia', error);
        }) 
        
        }
    })
  
}
export async function GetWorkExperience(id){

    let Experiencia = null;
  
    
    try {
      const resp = await Axios.get(`${Url}WorkExperience/${id}`);

    
      if (resp.data !== undefined) {

        Experiencia = resp.data;

      
      }
    } catch (error) {
      console.error('Error al obtener la lista de puestos solicitados:', error);
    }
    
    return Experiencia;
  
}

//Education....................................................
export async function DeleteEducation(eliminar){

    eliminar.map(async(eliminar)=>{


        if(eliminar.id != null){

        await Axios.delete(`${Url}Education/${eliminar.id}`).then(res=>{

        console.log('Education eliminado exitosamente');
        }).catch (error=>{
        console.error('Error al eliminar la Education', error);
        })
        }
    })

}
export async function PutEducation(Education){
    Education.map(async(Educations)=>{


        if(Educations.id != null){

        await Axios.put(`${Url}Education/${Educations.id}`, Educations).then(res=>{

        console.log('Education actualizado exitosamente');
        }).catch (error=>{
        console.error('Error al actualizar la Education', error);
        })

        }else{

        await Axios.post(`${Url}Education`, Educations).then(res=>{

        console.log('Education subido exitosamente');
        }).catch (error=>{
        console.error('Error al subir la Education', error);
        }) 
        
        }
    })

}
export async function GetEducation(id){

    let Experiencia = null;
  
    
    try {
      const resp = await Axios.get(`${Url}Education/${id}`);

    
      if (resp.data !== undefined) {

        Experiencia = resp.data;

      
      }
    } catch (error) {
      console.error('Error al obtener la lista de Education:', error);
    }
    
    return Experiencia;
  
}
//Training.............................................................................
export async function DeleteTraining(eliminar){

    eliminar.map(async(eliminar)=>{


        if(eliminar.id != null){

        await Axios.delete(`${Url}Training/${eliminar.id}`).then(res=>{

        console.log('Training eliminado exitosamente');
        }).catch (error=>{
        console.error('Error al eliminar la Training', error);
        })
        }
    })

}
export async function PutTraining(Training){
    Training.map(async(Training)=>{


        if(Training.id != null){

        await Axios.put(`${Url}Training/${Training.id}`, Training).then(res=>{

        console.log('Training actualizado exitosamente');
        }).catch (error=>{
        console.error('Error al actualizar la Training', error);
        })

        }else{

        await Axios.post(`${Url}Training`, Training).then(res=>{

        console.log('Training subido exitosamente');
        }).catch (error=>{
        console.error('Error al subir la Training', error);
        }) 
        
        }
    })

}
export async function GetTraining(id){

    let Training = null;
  
    
    try {
      const resp = await Axios.get(`${Url}Training/${id}`);

    
      if (resp.data !== undefined) {

        Training = resp.data;

      
      }
    } catch (error) {
      console.error('Error al obtener la lista de Training:', error);
    }
    
    return Training;
  
}

//Language........................................................................
export async function DeleteLanguage(eliminar){

    eliminar.map(async(eliminar)=>{


        if(eliminar.id != null){

        await Axios.delete(`${Url}Language/${eliminar.id}`).then(res=>{

        console.log('Language eliminado exitosamente');
        }).catch (error=>{
        console.error('Error al eliminar el Lenguage', error);
        })
        }
    })

}
export async function PutLanguage(Language){
    Language.map(async(Language)=>{


        if(Language.id != null){

        await Axios.put(`${Url}Language/${Language.id}`, Language).then(res=>{

        console.log('Language actualizado exitosamente');
        }).catch (error=>{
        console.error('Error al actualizar el Lenguage', error);
        })

        }else{

        await Axios.post(`${Url}Language`, Language).then(res=>{

        console.log('Language subido exitosamente');
        }).catch (error=>{
        console.error('Error al subir el Lenguage', error);
        }) 
        
        }
    })

}
export async function GetLanguage(id){

    let Language = null;
  
    
    try {
      const resp = await Axios.get(`${Url}Language/${id}`);

    
      if (resp.data !== undefined) {

        Language = resp.data;

      
      }
    } catch (error) {
      console.error('Error al obtener la lista de Languages:', error);
    }
    
    return Language;
  
}

//PersonalReferences.......................................................................
export async function DeletePersonalReferences(eliminar){

    eliminar.map(async(eliminar)=>{


        if(eliminar.Id != null){

        await Axios.delete(`${Url}PersonalReferences/${eliminar.Id}`).then(res=>{

        console.log('Referencias Personales eliminado exitosamente');
        }).catch (error=>{
        console.error('Error al eliminar las Referencias Personales', error);
        })
        }
    })

}
export async function PutPersonalReferences(PersonalReferences){
    PersonalReferences.map(async(PersonalReferences)=>{


        if(PersonalReferences.id != null){

        await Axios.put(`${Url}PersonalReferences/${PersonalReferences.id}`, PersonalReferences).then(res=>{

        console.log('Referencias Personales actualizado exitosamente');
        }).catch (error=>{
        console.error('Error al actualizar las Referencias Personales', error);
        })

        }else{

        await Axios.post(`${Url}PersonalReferences`, PersonalReferences).then(res=>{

        console.log('Referencias Personales subido exitosamente');
        }).catch (error=>{
        console.error('Error al subir las Referencias Personales', error);
        }) 
        
        }
    })

}
export async function GetPersonalReferences(id){

    let PersonalReferences = null;
  
    
    try {
      const resp = await Axios.get(`${Url}PersonalReferences/${id}`);

    
      if (resp.data !== undefined) {

        PersonalReferences = resp.data;

      
      }
    } catch (error) {
      console.error('Error al obtener la lista de Referencias Personales:', error);
    }
    
    return PersonalReferences;
  
}

//ProfessionalReferences.................................................................
export async function DeleteProfessionalReferences(eliminar){

    eliminar.map(async(eliminar)=>{


        if(eliminar.id != null){

        await Axios.delete(`${Url}ProfessionalReferences/${eliminar.id}`).then(res=>{

        console.log('Referencias Laborales eliminado exitosamente');
        }).catch (error=>{
        console.error('Error al eliminar las Referencias Laborales', error);
        })
        }
    })

}
export async function PutProfessionalReferences(ProfessionalReferences){
    ProfessionalReferences.map(async(ProfessionalReferences)=>{


        if(ProfessionalReferences.id != null){

        await Axios.put(`${Url}ProfessionalReferences/${ProfessionalReferences.id}`, ProfessionalReferences).then(res=>{

        console.log('Referencias Laborales actualizado exitosamente');
        }).catch (error=>{
        console.error('Error al actualizar las Referencias Laborales', error);
        })

        }else{

        await Axios.post(`${Url}ProfessionalReferences`, ProfessionalReferences).then(res=>{

        console.log('Referencias Laborales subido exitosamente');
        }).catch (error=>{
        console.error('Error al subir las Referencias Laborales', error);
        }) 
        
        }
    })

}
export async function GetProfessionalReferences(id){

    let ProfessionalReferences = null;
  
    
    try {
      const resp = await Axios.get(`${Url}ProfessionalReferences/${id}`);

    
      if (resp.data !== undefined) {

        ProfessionalReferences = resp.data;

      
      }
    } catch (error) {
      console.error('Error al obtener la lista de Referencias Laborales:', error);
    }
    
    return ProfessionalReferences;
  
}

//.........................................................................
// export async function PutPuestoSolicitado(Id,pustosSoli){
// await Axios.put(`http://localhost:3001/PuestoSolicitado/${Id}`, pustosSoli).then(res=>{

//     console.log('Puesto solisitado actualizado exitosamente');
//     }).catch (error=>{
//     console.error('Error al actualizar el puesto', error);
// })
// }