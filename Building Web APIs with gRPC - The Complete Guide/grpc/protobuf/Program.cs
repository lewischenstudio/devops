using Google.Protobuf;
using Google.Protobuf.WellKnownTypes;
using Grpc.Course.Protobuf.Test;

Console.WriteLine("Welcome to Protobuf test");
var emp = new Employee();
emp.FirstName = "Memi";
emp.LastName = "Lavi";
emp.IsRetired = false;
var birthdate = new DateTime(1976, 7, 9);
birthdate = DateTime.SpecifyKind(birthdate, DateTimeKind.Utc);
emp.BirthDate = Timestamp.FromDateTime(birthdate);
emp.Age = 28; // oneof
emp.MaritalStatus = Employee.Types.MaritalStatus.Married;
emp.PreviousEmployers.Add("Microsoft");
emp.PreviousEmployers.Add("HP");
// Working With Composite Types -> Add an address
emp.CurrentAddress = new Address();
emp.CurrentAddress.City = "New York";
emp.CurrentAddress.StreetName = "5th Avenue";
emp.CurrentAddress.HouseNumber = 42;
emp.Relatives.Add("father", "John");
emp.Relatives.Add("mother", "Hannah");
emp.Relatives.Add("borther", "Dirk");

// Serialize the data and save it to a file
using (var output = File.Create("emp.data"))
{
    emp.WriteTo(output);
}

/* Read the file and deserialize the data
Run the file F5, Move to next with F10, Hover over "empFromFile" 
to verify that the field values are indeed indentical */
Employee empFromFile;
using (var input = File.OpenRead("emp.data"))
{
    empFromFile = Employee.Parser.ParseFrom(input);
}


Console.WriteLine("Protobuf test complete :-)");