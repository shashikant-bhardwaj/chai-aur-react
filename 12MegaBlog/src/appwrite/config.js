import conf from '../conf.js'
import { Client, TablesDB, Storage, ID, Query } from 'appwrite'

export class Service {
    client = new Client();
    Databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new TablesDB(this.client);
        this.bucket = new Storage(this.client);

    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.TablesDB.createRows(
                conf.appwriteDataId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: ", error)
        }
    }

    async updatePost(slug, { title, content, featuredImages, status }) {
        try {
            return this.databases.updateRow(
                conf.appwriteDataId,
                appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite :: updatePost :: error", error);
        }
    }

    async deletePost(slug) {
        try {
            this.databases.deleteRow(
                conf.appwriteDataId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite :: deletePost :: error", error);
            return false;
        }

    }

    async getPost(slug){
        try {
            return await this.databases.getRow(
                conf.appwriteDataId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: getPost :: error" , error);
            return  false;
        }
    }

    async getPosts (queries = [Query.equal("status", "active")]){
        try {
            this.databases.listRows(
                conf.appwriteDataId,
                conf.appwriteCollectionId,
                queries, 
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error" , error);
            return false;
        }
    }

    // file upload service

    async uploadFile(file){
        try {
            this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite :: uploadFile :: error" ,error);
        }
    }

    async deleteFile(fileId){
        try {
            this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite :: deleteFile :: error", error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

    
}

const service = new Service();

export default service;