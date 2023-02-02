`
const confirm = await ui.confirm("Your friend comes running, he asks what he can do to help. What do you say?", "click the Esc button!", "pull the plug!");
  
    if(confirm){
      alert('yes clicked');
    }   else{
      alert('no clicked');
    }

`


const ui = {
  confirm: async (message, yes, no) => createConfirm(message, yes, no)
}

const createConfirm = (message, yes, no) => {
  return new Promise((complete, failed)=>{
    $('#confirmMessage').text(message)
    
    document.getElementById('yes').value = yes;
    document.getElementById('no').value = no;
    
    if (yes == 0){
      document.getElementById('yes').style.display = 'none';
      document.getElementById('X').value = 'Close';
    }
    if (no == 0){
      document.getElementById('no').style.display = 'none';
      document.getElementById('X').value = 'Close';
    }

    $('#yes').off('click');
    $('#no').off('click');
    
    $('#X').on('click', ()=> { $('.confirm').hide();});
    $('#yes').on('click', ()=> { $('.confirm').hide(); complete(true); });
    $('#no').on('click', ()=> { $('.confirm').hide(); complete(false); });
    
    $('.confirm').show();
  });
}
                     
const saveForm = async () => {
  document.getElementById('no').style.display = 'inline';
  document.getElementById('yes').style.display = 'inline';
  document.getElementById('X').value = 'Give Up';
  const confirm = await ui.confirm('Your trapped in a computer, what do you do?', "Yell for help", "Search online for a solution");
  
  if(confirm){
    // yell for help
    const confirm = await ui.confirm("Your friend comes running, he asks what he can do to help. What do you say?", "click the Esc button!", "pull the plug!");
  
    if(confirm){
      // click the Esc button
      const confirm = await ui.confirm("The computer crashes, your trapped, forever!", 0, 0);
  
    }else{
      // pull the plug
      const confirm = await ui.confirm("The computer goes blank, no power, your gone forever!", 0,0);
    }
  } else{
    // search online for a solution
    const confirm = await ui.confirm("You found two links what link do you choose?","https://download-free-safe-software.cn", "http://how-to-escape-your-computer.info");
  
    if(confirm){
      // first link
      const confirm = await ui.confirm("The site claims that its free software will get you out of this problem, what do you choose?","escaper 1.0 (a few bugs)", "killer 9.6 (no bugs)");
  
    if(confirm){
      // escaper
      const confirm = await ui.confirm("WHAT! Your screen starts flashing after the download. Then it deletes all your files, you download a huge virus. You get deleted, with the computer.", 0,0);
    }   else{
      // killer
      const confirm = await ui.confirm("The site was right, there are no bugs with this software. It does exactly what it's suppost to, kill your computer and you go down with it!", 0,0);
    }
    }   else{
      // second link
      const confirm = await ui.confirm("The site recomends two things.", "code your self out", "click the shut down button from the inside of the computer");
  
    if(confirm){
      // code it
      const confirm = await ui.confirm("What programming language do you want to use?", "C++", "python");
  
    if(confirm){
      // c++
     const confirm = await ui.confirm("you don't know how to program that specific thing in c++, you didn't even think it was possible to get sucked into a computer!", "learn c++ a bit more", "tell your friend to learn");
  
    if(confirm){
      // learn
      const confirm = await ui.confirm("Great choice! Why not learn C++ some more, what could go wrong! Nothing went wrong, you escaped the computer!", 0,0);
    }   else{
      // ask your friend to program you out
      const confirm = await ui.confirm("Your friend doesn't know how to program and he dosn't really want to try. Your friend pulls the plug and you go down with the computer.", 0,0);
    }
    }   else{
      // python
      const confirm = await ui.confirm("python is not a language built to do that kind of thing.", "try again", "search the internet");
  
    if(confirm){
      // again
      const confirm = await ui.confirm("working on one project for hours can do strange things to a person, you end up deleting the files that run your computer. Your computer dies and you go down with it.", 0,0);
    }   else{
      // internet
      const confirm = await ui.confirm("The internet's a dangerus place to be, expsally when your frusterated. You downloaded a virus. The virus makes you slowly vanish away.", 0,0);
    }
    }
    }   else{
      // shut down from inside
      const confirm = await ui.confirm("If you shut the computer down you shut down as well and that's what happended.", 0,0);
    }
    }
  }
}
