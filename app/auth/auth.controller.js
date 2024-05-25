import asyncHandler from 'express-async-handler'
import { prisma } from '../prisma.js'

// @desc    Auth user
// @route   POST /api/auth/login
// @access  Public
export const authUser = asyncHandler(async (req, res) => {
	const user = await prisma.user.findMany()
	res.json(user)
})
