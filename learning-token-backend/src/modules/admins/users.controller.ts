import {
    ConflictException,
    Controller,
    Get,
    HttpStatus,
    Param,
    Patch,
    Query,
    UseGuards
} from '@nestjs/common'
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard'
import { AdminService } from './users.service'

@Controller('/admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) {}

    @UseGuards(JwtAuthGuard)
    @Get('institution-list')
    private async get_institution_list(
        @Query('page') page = 1, // Set default value to 1
        @Query('limit') limit = 10 // Set default value to 10
    ) {
        try {
            // console.log(paginationQuery)
            // const { page, limit } = paginationQuery
            const result = await this.adminService.findAll(
                page,
                limit,
                'Institution'
            )
            return {
                status: HttpStatus.FOUND,
                message: 'Institution Found',
                result: result
            }
        } catch (error) {
            throw new ConflictException(error.message)
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get('learner-list')
    private async get_learner_list(
        @Query('page') page = 1, // Set default value to 1
        @Query('limit') limit = 10 // Set default value to 10
    ) {
        try {
            console.log('page', page)
            // console.log(paginationQuery)
            // const { page, limit } = paginationQuery
            console.log(page)
            const result = await this.adminService.findAll(
                page,
                limit,
                'Learner'
            )
            return {
                status: HttpStatus.FOUND,
                message: 'Institution Found',
                result: result
            }
        } catch (error) {
            throw new ConflictException(error.message)
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get('instructor-list')
    private async get_instructor_list(
        @Query('page') page = 1, // Set default value to 1
        @Query('limit') limit = 10 // Set default value to 10
    ) {
        try {
            const result = await this.adminService.findAll(
                page,
                limit,
                'Instructor'
            )
            return {
                status: HttpStatus.FOUND,
                message: 'Institution Found',
                result: result
            }
        } catch (error) {
            throw new ConflictException(error.message)
        }
    }

    @UseGuards(JwtAuthGuard)
    @Patch('institution/:id')
    async update(
        @Param('id') id: number
        // @Body() updateBillDto: UpdateBillDto
    ) {
        return {
            statusCode: HttpStatus.OK,
            message: 'Bill updated successfully',
            result: await this.adminService.update(id, 'Institution')
        }
    }
}
