export default ( context: any ) => {
  console.log(context);
  
  return (<div> {context.msg} </div>)
}