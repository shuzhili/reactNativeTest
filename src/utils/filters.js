const toYMD=date=>{
    if(!date)return date
    date=new Date(date)
    return `${date.getFullYear()}/${date.getMonth()+1}/${data.getDate()}${date.getHours()>11?'下午':'上午'}`
}
const descLimit=(description,limit=80)=>{
    return description.length<limit?description:`${description.slice(0,limit)}...`
}
const localThumb=require('@app/images/thumb-article.jpg')
const buildThumb=thumb=>{
    return thumb?{uri:thumb}:localThumb
}
export default {
	toYMD,
	descLimit,
	buildThumb
}


















