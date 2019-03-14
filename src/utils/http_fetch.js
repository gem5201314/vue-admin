

class Fetch{
  static baseUrl(){
    let url=process.env.NODE_ENV==='development'?'/dev':'/build'
    return  url
  }
  // 请求
  static async request(url,methods,query){
    let res,data
    try {
       res=await fetch(this.dealRequest(url,methods,query).url,this.dealRequest(url,methods,query).data)
       data=await res.json()
    } catch (error) {
      //请求错误...
    }
    return new Promise((resolve,reject)=>{
      if(data.code===200){
        // 数据拦截
        resolve(data.data)
      }
      if(data.code!==200){
        reject(Error,data.code)
         //返回错误处理...
      }
    })
  }
  //url处理
  static dealUrl(url,methods,query){
    let httpUrl=this.baseUrl()+url
    if(methods==='GET'){ //get方法拼接参数
      httpUrl=this.baseUrl()+url+'?'
      for (let val in query){
        httpUrl=`${httpUrl}${val}=${query[val]}&`
      }
      httpUrl=httpUrl.substr(-1)==='&'?httpUrl.substr(0,httpUrl.length-1):httpUrl
    }
    return httpUrl
  }
  // 请求参数    
  static dealRequest(url,methods,query){
    let token='xxxxxxxxxxx-token'
    let data={
      method: methods, 
      body: methods==='GET'?null:JSON.stringify(query), //get方法不能有body
      headers: new Headers({
        'Content-Type': 'application/json',
        'token':token,
        'mode': 'cors',
      })
    }
    return {//返回url,参数
      url:this.dealUrl(url,methods,query),
      data
    }
  }

  // 请求导出 双层Promise
  static async get(url,data){
    return await this.request(url,'GET',data)
  }
  static async post(url,data){
    return await this.request(url,'POST',data)
  }
  static async delete(url,data){
    return await this.request(url,'DELETE',data)
  }
  static async put(url,data){
    return await this.request(url,'PUT',data)
  }

}
export default Fetch