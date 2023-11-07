export default function Navbar()
{
    return <div className="navbar">
        BATMAN
        <img
            width={"3vw"}
            height={"5vh"} 
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hubpng.com%2Fphoto%2F73544%2Fbatman-logo-vintage-retro-comic-book-vector-black&psig=AOvVaw2ebZ3Ijr_S4bCxqEvE79K1&ust=1691986365147000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwj0kazD4tiAAxVUTmwGHWuMChUQjRx6BAgAEAw"
            alt=""
        />
        <button className="btn2" id='logout'>
            {/* <img 
                width="90%"
                src="https://previews.123rf.com/images/ahasoft2000/ahasoft20001702/ahasoft2000170207071/71920628-logout-vector-icon-illustration-style-is-flat-iconic-black-symbol-on-a-transparent-background.jpg"
                alt=""
            /> */}
            Log Out
        </button>
    </div>;

}