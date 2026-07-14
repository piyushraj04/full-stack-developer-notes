//Ways to craete funhctional components
//1.named function
// function FirstFunc(){
//     return <h1>This is my first functional component using Named function</h1>
// }

// 2.Using Anonymous function
// let FirstFunc = function() {
//      return <h1>This is my first functional component - using Anonymous function</h1>
// }

// 3. Using arrow function
// let FirstFunc = () => {
//      return <h1>This is my first functional component - using arrow function</h1>
// }

//returning multiple jsx 
const FirstFunc = () => {
    return(
    <>
    <h1>This is functional component returning multiple JSX -- first one</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas accusamus facilis incidunt corrupti ad iusto maxime obcaecati consequuntur ea quia sint, expedita vitae error omnis illo voluptatibus magnam dolorem assumenda?</p>
    </>
)
}
export default FirstFunc