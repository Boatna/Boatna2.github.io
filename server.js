const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('.'));

app.post('/register', async (req, res) => {
    const { name, employeeId, department, course } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'patipol.p@bitwise.co.th',
            pass: 'boatzacat000',
        },
    });

    const mailOptions = {
        from: 'your_email@gmail.com',
        to: 'patipol.p@bitwise.co.th',
        subject: `New Registration: ${name}`,
        text: `Employee Details:\nName: ${name}\nID: ${employeeId}\nDepartment: ${department}\nCourse: ${course}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ message: 'Registration successful! Email sent.' });
    } catch (error) {
        res.status(500).json({ message: 'Error sending email.', error });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
