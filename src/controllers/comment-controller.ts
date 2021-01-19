import { Request, Response } from 'express';
import Comment from '../models/Comment'
import _ from 'underscore'

export class CommentController{
    constructor(){}

    async create(req: Request, res: Response){
        const body = req.body
        const comment = new Comment(body)

        try {
            await comment.save()
            res.json({
                ok: true,
                comment
            })
        } catch (error) {
            res.status(500).json({
                ok: false,
                error
            })
        }
    }

    async get(req: Request, res: Response){
        try {
            const comments = await Comment.find().sort({date: "desc"})
            res.json({
                ok: true,
                comments
            })
        } catch (error) {
            res.status(500).json({
                ok: false,
                error
            })
        }
    }

    async update(req: Request, res: Response){
        const id = req.params.id

        const body = _.pick(req.body, ['date', 'content'])

        try {
            const commentUpdated = await Comment.findByIdAndUpdate(id, body, {
                new: true,
                runValidators: true
            })
            res.json({
                ok: true,
                commentUpdated
            })
        } catch (error) {
            res.status(500).json({
                ok: false,
                error
            })
        }
    }

    async delete(req: Request, res: Response){
        const id = req.params.id

        try {
            const commentRemoved = await Comment.findByIdAndRemove(id)

            res.json({
                ok: true,
                commentRemoved
            })
        } catch (error) {
            res.status(500).json({
                ok: false,
                error
            })
        }
    }
}

