
            const age = [19,22,19,24,20,25,26,24,25,24]

            //    let sort = age.sort((a,b)=>{
            //         return a - b
            //    })

            //    console.log(sort)
            //     //    min age 
            //     console.log(sort[0])
    
            //     //    max age
            // console.log(sort[sort.length-1])


            //     // SECOND METHOD 

            //     let minAge = age.reduce((a,b)=>{
            //         return a < b ? a : b
            //     })
            //     console.log(minAge)

            //     // MAX AGE 
            //     let maxAge = age.reduce((a,b)=>{
            //         return a > b ? a : b
            //     })
            //     console.log(maxAge)


            // mid age 
            let midAge = age.reduce((a,b)=>{
                return a + b / 10
            })

            console.log(midAge)