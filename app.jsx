 var hel = (
    <h1>Hello React.</h1>
 );

 var txt = 'Hello ya!';
 var txtEle = <h2>{txt}</h2>;

var arr = [
    <p>one</p>,
    <p>two</p>,
    <p>three</p>
];

var mapArr = ['a', 'b', 'c'];
var mapEle = (
    <div>
        {
            mapArr.map(function(text){
                return <p>{text}</p>;
            })
        }
    </div>
);

var tryTxt = 'txt';
var tryApp = (
    <h3>
        {
            tryTxt === 'undefind' ? 'Hello' : 'Hello ' + tryTxt + ' !!'
        }
    </h3>
);

 ReactDOM.render(
    <div>
        {hel}
        <hr/>
        {txtEle}
        <hr/>
        {arr}
        <hr/>
        {mapEle}
        <hr/>
        {tryApp}
    </div>,
    document.getElementById('app')
);