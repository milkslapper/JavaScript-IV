// CODE here for your Lambda Classes

class Person {
    constructor(attribute){
      this.name = attribute.name;
      this.age = attribute.age;
      this.location = attribute.location;
      this.gender = attribute.gender;
    }
    speak(){
      return(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
  }

class Instructor extends Person{
    constructor(attribute){
        super(attribute)
        this.specialty = attribute.specialty;
        this.favLanguage = attribute.favLanguage;
        this.catchPhrase = attribute.catchPhrase;
    }
    demo(){
        return(`Today we are learning about ${this.favLanguage} `)
    }
    grade(){
        return(`${this.name} receives a perfect score on ${this.favLanguage} `)
    }
}

class Student extends Instructor{
    constructor(attribute){
        super(attribute)
        this.previousBackground = attribute.previousBackground;
        this.className = attribute.className;
        this.favSubjects = attribute.favSubjects;
    }
    listsSubjects(){
        return(`${this.favSubjects}`)
    }
    PRAssignment(){
        return(`${this.name} has submitted a PR for ${this.favLanguage}`)
    }
    sprintChallange(){
        return(`${this.name} has begun sprint challange on ${this.favLanguage}`)
    }
}

class ProjectManagers extends Student{
    constructor(attribute){
        super(attribute)
        this.gradClassName = attribute.gradClassName;
        this.favInstructor = attribute.favInstructor;
    }
    standUp(){
        return(`${this.name} announces to ${this.gradClassName}, @channel standy times!`)
    }
    debugsCode(Student){
        return(`${this.name} debugs ${Student}'s code on ${this.favLanguage}`)
    }
}

const tom = new Instructor({
    name: 'Tom',
    location: 'Chicago',
    age: 29,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `Don't forget the homies`
  });

  const juan = new Instructor({
    name: 'Juan',
    location: 'Africa',
    age: 44,
    gender: 'male',
    favLanguage: 'Ruby',
    specialty: 'Back-end',
    catchPhrase: `Don't sleep and drive`
  });

const fred = new Student({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    previousBackground: 'worked at a call center',
    className: 'Webpt5',
    favSubjects: ['HTML','CSS']
  });

  const greg = new Student({
    name: 'Greg',
    location: 'Mexico',
    age: 44,
    gender: 'male',
    favLanguage: 'PHP',
    specialty: 'Front-end',
    previousBackground: 'worked at a Mcdonalds',
    className: 'Webpt5',
    favSubjects: ['HTML','CSS','JAVASCRIPT']
  });

  const jeff = new Instructor({
    name: 'Jeff',
    location: 'Kansas',
    age: 23,
    gender: 'male',
    favLanguage: 'C++',
    specialty: 'Back-end',
    catchPhrase: `Don't forget the homies`
  });

  const bruce = new ProjectManagers({
    name: 'Bruce',
    location: 'California',
    age: 23,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `Don't forget the homies`,
    gradClassName:'Cs1',
    favInstructor: 'Sean'
  });

  const david = new ProjectManagers({
    name: 'David',
    location: 'New York',
    age: 30,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `Don't forget the homies`,
    gradClassName:'CS5',
    favInstructor: 'Carol'
  });

console.log(greg.age);
console.log(david.standUp());
console.log(bruce.debugsCode('greg'))
console.log(bruce.gender);
console.log(greg.listsSubjects());
console.log(jeff.location);
console.log(jeff.specialty);
console.log(greg.sprintChallange());
console.log(juan.demo());
console.log(bruce.grade())
console.log(greg.PRAssignment())