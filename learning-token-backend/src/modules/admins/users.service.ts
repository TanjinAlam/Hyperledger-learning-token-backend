import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Admin } from 'src/modules/admins/entities/user.entity'
import { Repository } from 'typeorm'
import { Institution } from '../institutions/entities/institution.entity'
import { Instructor } from '../instructors/entities/instructor.entity'
import { Learner } from '../learners/entities/learner.entity'

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(Admin)
        private readonly adminRepository: Repository<Admin>,
        @InjectRepository(Institution)
        private readonly institutionRepository: Repository<Institution>,
        @InjectRepository(Instructor)
        private readonly instructorRepository: Repository<Instructor>,
        @InjectRepository(Learner)
        private readonly learnerRepository: Repository<Learner>
    ) {}

    async findAll(page = 1, limit = 10, type: string) {
        if (type == 'Institution') {
            const offset = (page - 1) * limit
            return await this.institutionRepository.find({
                skip: offset,
                take: limit
            })
        } else if (type == 'Instructor') {
            const offset = (page - 1) * limit
            return await this.instructorRepository.find({
                skip: offset,
                take: limit
            })
        } else if (type == 'Learner') {
            const offset = (page - 1) * limit
            return await this.learnerRepository.find({
                skip: offset,
                take: limit
            })
        }
    }

    async update(uuid: number, type: string) {
        if (type == 'Institution') {
            const institutionDetails =
                await this.institutionRepository.findOneBy({ id: uuid })
            if (institutionDetails.status == false) {
                institutionDetails.status = true
                this.institutionRepository.save(institutionDetails)
                return institutionDetails
            } else {
                institutionDetails.status = false
                this.institutionRepository.save(institutionDetails)
                return institutionDetails
            }
        } else if (type == 'Instructor') {
            const instructorDetails = await this.instructorRepository.findOneBy(
                { id: uuid }
            )
            if (instructorDetails.status == false) {
                instructorDetails.status = true
                this.institutionRepository.save(instructorDetails)
                return instructorDetails
            } else {
                instructorDetails.status = false
                this.institutionRepository.save(instructorDetails)
                return instructorDetails
            }
        } else if (type == 'Learner') {
            const learnerDetails = await this.learnerRepository.findOneBy({
                id: uuid
            })
            if (learnerDetails.status == false) {
                learnerDetails.status = true
                this.institutionRepository.save(learnerDetails)
                return learnerDetails
            } else {
                learnerDetails.status = false
                this.institutionRepository.save(learnerDetails)
                return learnerDetails
            }
        }
    }
}
