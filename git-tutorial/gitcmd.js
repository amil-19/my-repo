// git config --global user.name
console.log('AMIL')
// git config --global user.email


    // LIST OF CONFIG 
    // git config --list



// CREAT NEW FOLDER
console.log('ok')
    // mkdir <folderName> = mkdir myFolder


        // CREATE A FILE INSITE FOLDER USING GIT 
    // touch file.index

    // CHECK HOW MANY FILE INSIDE THE FOLDER USING GIT 
    // ls -a (LS -A)



    // persent working directry (it will tell which folder are yoi in) 
    // pwd 


    // commit git 
        // git commit -m "this is commit messege or note"



        // DIRECT COMMIT THE FILE WITHOUD SENDING TO STAGING AREA 
        // git commit -a -m 'file commited withoud sending to staging area'




    // CHECK WHAT YOU CHANGE IN FILE BEFORE git add . 
    // git diff


    // CHECK WHAT YOU CHANGED IN FILE AFTER git add . and before commit 
    // stage area
    // git diff --staged


    // DETAILS ABOUT PREVIOUS COMMIT 
        // git log
        
        // to one line or short code 
        // git log --oneline 
    

            // get deleted code back 
            // git restore <file name>
console.log('hello ')

        // do back the file from staging area to unstage
        // unstage the change 
        // git restore --staged <file Name>


        // GET ALL DELETED FILE 
        // git checkout -f 


        // use mv command to rename the file 
        // git mv js.js jsEdited.js 

        
        // REMOVE FILE  rm = remove
        // rm <fileName> = rm js.js 


            // clear cached for ignore 
        // git rm --cached git.html


        // to write the code or text in git 
        // vi <fileName> = vi file.html 





        // to show a particular commit
        // git show <commit id> = git show e17dgj


        // DETAIL ABOUT THE COMMIT WHO AND WHEN THE COMMIT WAS CHANGED 
        // git blame js.jscledk



        // TAKE HEAD TO PREVIOUS COMMIT
        // git reset --hard <previous commit id>
        // git reset --hard e3842a5 

        console.log('one more commit')
    console.log('new comiit -')

        // to clone project from the git hub 
        // git clone <url of clone github>
        // git clone https://github.com/X-SLAYER/Website-Cloner.git