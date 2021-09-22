const defaultState={
    openOrClose:false,
    DataTextChange:'',
    list:[],
    value:false,
    check:true
}

const windowReducer=(state=defaultState,action)=>{
    let stateCopy={...state}
    switch (action.type){
        case 'OPEN_CLOSE':
            stateCopy.openOrClose=!stateCopy.openOrClose
            return stateCopy
        case 'CHANGE_TEXT':
            stateCopy.DataTextChange=action.text
            return stateCopy
        case 'ADD':
            if(stateCopy.DataTextChange===''){
                stateCopy.check=false
                return stateCopy
            }else {
                let arr = []
                try{
                    let sum = stateCopy.DataTextChange.match(/\d+/ig)[0]
                    let MaxSum = 260000
                    let one = (+sum * 12) * 0.13
                    let years = Math.floor(MaxSum / one)
                    let i = 0
                    let year = 1
                    while (i < years) {
                        let a = {
                            id: Math.floor(Math.random() * 1000),
                            sum: one + " рублей",
                            years: `в ${year} год`
                        }
                        arr.push(a)
                        i++
                        year++

                    }
                    stateCopy.list = [...arr]
                    stateCopy.value = true
                    stateCopy.check=true
                    return stateCopy
                }catch (e){
                    stateCopy.check=false
                    return stateCopy
                }

            }
       default:
            return state
    }
}
export default windowReducer