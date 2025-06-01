'use server'

import { RegisterInputProps } from "@/types/type";
import { prismaClient } from "@/lib/db";
import bcrypt from "bcrypt"
export async function createUser(formData: RegisterInputProps) {
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