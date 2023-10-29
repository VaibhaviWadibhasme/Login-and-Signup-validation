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

// Retrieve user data from the form (make sure to validate/sanitize data)
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];
$dob = $_POST['dob'];
$contact = $_POST['contact'];
$profileImage = $_POST['profile_image'];

// Insert user data into the database
$sql = "INSERT INTO user1 (name, email, password, dob, contact, profile_image) VALUES (?, ?, ?, ?, ?, ?)";
$stmt = $mysqli->prepare($sql);
$stmt->bind_param("ssssss", $name, $email, $password, $dob, $contact, $profileImage);

if ($stmt->execute()) {
    echo "User registration successful!";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$mysqli->close();
?>
