import logo from '../../../assets/logo.png'

const Header = () => {
    const currentdate = new Date();
    // Defining the options for formatting
    const dateFormat = {
        weekday: 'long', // Display the full weekday name
        year:'numeric',
        month: 'long',  // Display the full month name
        day:'numeric'
    }
    const formateddate = currentdate.toLocaleString(undefined,dateFormat);
    return (
        <div className="flex flex-col justify-center items-center my-8">
            
            <img src={logo} alt=""  className="mt-2 mb-5"/>
            <p className="text-gray-500 mb-3 text-lg">Journalism Without Fear or Favour</p>
            <p className="text-xl font-medium text-gray-600">{ formateddate}</p>
        </div>
    );
};

export default Header;