  <?php
// Database connection parameters
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "sr_edu";

// Connect to MySQL
$mysqli = new mysqli($host, $user, $pass, $dbname);

// Check the connection
if ($mysqli->connect_error) {
    die("Connection failed:  " . $mysqli->connect_error);
}
$email = $_POST['email'];
$password = $_POST['password'];

// Database connection here
$con = new mysqli("localhost", "root", "", "test");

if ($con->connect_error) {
    die("Failed to connect: " . $con->connect_error);
} else {
    $stmt = $con->prepare("SELECT * FROM registration WHERE email = ? AND password = ?");
    $stmt->bind_param("ss", $email, $password);
    $stmt->execute();
    $stmt_result = $stmt->get_result();

    if ($stmt_result->num_rows > 0) {
        echo "<h2>Login successful</h2>";
        // Add code to redirect to the user's profile or dashboard here
    } else {
        echo "<h2>Invalid Email or Password</h2>";
    }

    $stmt->close();
    $con->close();
}
?>
