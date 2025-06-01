'use server'
import { RegisterInputProps } from "@/types/type";
import { prismaClient } from "@/lib/db";
import { Resend } from 'resend';
import bcrypt from "bcrypt"
import EmailTemplate from "@/Components/Emails/email-template";

export async function createUser(formData: RegisterInputProps) {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { fullName, email, phone, role, password } = formData
    try {
        const existingUser = await prismaClient.user.findUnique({
            where: {
                email,
            },
        });
        if (existingUser) {
            // throw new Error("User Alreaday exist")
            return {
                data: null,
                message: `User with this email ( ${email})  already exists in the Database`,
                status: 409,
            };
        }

        // Encrypt the Password =>bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);
        //Generate Token
        const generateToken = () => {
            const min = 100000; // Minimum 6-figure number
            const max = 999999; // Maximum 6-figure number
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        const userToken = generateToken();
        const newUser = await prismaClient.user.create({
            data: {
                name: fullName,
                email,
                phone,
                password: hashedPassword,
                role,
                token: userToken,
            },
        });

        //Send an Email with the Token on the link as a search param
        const token = newUser.token;
        const userId = newUser.id;
        const firstName = newUser.name.split(" ")[0]
        const linkText = "Verify your Account ";
        const message =
            "Thank you for registering with Gecko. To complete your registration and verify your email address, please enter the following 6-digit verification code on our website :";
        const sendMail = await resend.emails.send({
            from: "Medical App <info@jazzafricaadventures.com>",
            to: email,
            subject: "Verify Your Email Address",
            react: EmailTemplate({ firstName, token, linkText, message }),
        });
        console.log(token);
        console.log(sendMail);
        console.log(newUser);
        return {
            data: newUser,
            message: null,
            status: 200,
        };
    }
    catch (error) {
        console.log(error)
        return {
            error: "Something went wrong"
        };
    }
}

export async function getUserById(id: string) {
    if (id) {
        try {
            const user = await prismaClient.user.findUnique({
                where: {
                    id
                }
            })
            return user;
        } catch (err) {
            console.log(err)
        }
    }
}