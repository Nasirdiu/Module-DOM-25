//button tag

function green(){
    document.body.style.backgroundColor='#40C9C4';
}
// red button

document.getElementById('red').addEventListener('click',function(){
    document.body.style.backgroundColor='lightblue';
})

// comment option
    document.getElementById('button-post').addEventListener('click',function(){

        const comment=document.getElementById('new-comment');
        const uesrcomment=comment.value;

        const newcomment=document.createElement('p');
        newcomment.innerText=comment.value;

        const firstcomm =document.getElementById('firstcomm');
        firstcomm.appendChild(newcomment);

        comment.value='';




    })


//delete option 
document.getElementById('delete-button').addEventListener('click',function(){
    document.getElementById('remove').style.display='none';
})
//delete button
document.getElementById('input-remove').addEventListener('keyup',function(event){
   const deleteall= document.getElementById('delete-button');
   if(event.target.value== 'delete'){
       deleteall.removeAttribute('disabled')
   }
   else{
       deleteall.setAttribute('disabled',true);
   }
})
