var express = require('express');
var app = express();
var http = require('http').Server(app);

const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/www'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/www/form.html");
    // res.send('This is the authentication route.');
});
const users = [
  { email: 'abc@gmail.com.au', birthday: '12/08/2000', age: 18, pwd: '123',valid: true  },
  { email: 'zyz@gmail.com.au', birthday: '11/05/2001', age: 28, pwd: '262',valid: false  },
  { email: 'abc@gmail.com.au', birthday: '19/02/2003', age: 38, pwd: '356',valid: true  },
];


// Chuyển đổi đối tượng đã được chỉnh sửa thành chuỗi JSON

  app.get('/api/auth', (req, res) => {
    const submittedUsername = req.query.username;
    const submittedPassword = req.query.password;
  
    const user = users.find(u => u.username === submittedUsername && u.password === submittedPassword);
  
    if (user) {
      const userData = {
        username: user.username,
        birthdate: user.birthdate,
        age: user.age,
        email: user.email,
        valid: true
      };
      res.json(userData);
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  });
  
  
app.post('/api/login', function (req, res) {
    
    if (!req.body) {
        return res.sendStatus(400);
    }
    var customer = {};
    customer.email = req.body.email;
    customer.upwd = req.body.upwd;
    customer.valid = false;
    for (let i = 0; i < users.length; i++) {
        if (req.body.email === users[i].email && req.body.upwd === users[i].pwd && users[i].valid == true) {
            customer.valid = true;
            const userWithoutPwd = { ...users[i] };
            delete userWithoutPwd.pwd;
            let userString = JSON.stringify(userWithoutPwd);
            console.log(userString);

            
            break;
        }
    }
    res.send(customer);
});

app.listen(3000, () => {
    var d = new Date();
    var n = d.getHours();
    var m = d.getMinutes();
    console.log("Server has been started at: " + n + ":" + m);
});
