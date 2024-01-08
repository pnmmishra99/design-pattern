function Developer(name){
    this.name=name;
    this.type='developer'
  }
  
  function Tester(name){
    this.name=name;
    this.type='tester'
  }
  
  function EmployeeFacory(){
    this.create = (name,type)=>{
      switch(type)
        {
          case 1:
            return new Developer(name)
            break;
          case 2:
            return new Tester(name)
            break;
        } 
    }
  }
  
  function say(){
    console.log("hi I am "+this.name+" and I am a "+this.type)
  }
  
  const employeeFactory=new EmployeeFacory()
  const employees=[]
  
  employees.push(employeeFactory.create("Poonam",1))
  
  employees.push(employeeFactory.create("vijay",2))
  
  employees.forEach(emp=>{
    say.call(emp)
  })