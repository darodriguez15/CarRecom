/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import { Recoms } from '../api/recoms';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';

if (Meteor.isServer) {
    describe('RecomsDB', () => {
        describe('methods', () => {
            const userId = Random.id();
            let booksId;

            beforeEach(() => {
                Recoms.remove({});
                booksId = Recoms.insert({
                    text: 'test task',
                    createdAt: new Date(),
                    owner: userId,
                    username: 'tmeasday',
                    imagen: "https://d30y9cdsu7xlg0.cloudfront.net/png/3688-200.png",
                    genero: "",
                    idioma: "",
                    texto: "",
                    likes: 0,
                    dislikes: 0,
                    comments: "",
                    mG: "hidden",
                    mL: "hidden",
                    mI: "hidden",
                    busquedaH: "",
                    botonBusqueda: "hidden"
                    // _id of logged in user
                    // username of logged in user
                });
            });
            it('can instert a Recom', () => {

                assert.equal(Recoms.find().count(), 1);
            });
            it('can update a Recom', () => {
                // Find the internal implementation of the task method so we can
                // test it in isolation
                const update = Meteor.server.method_handlers['recoms.editarGenre'];

                // Set up a fake method invocation that looks like what the method expects
                const invocation = { userId };

                // Run the method with `this` set to the fake invocation
                update.apply(invocation, [booksId,"salsa"]);

                let newBooks = Recoms.findOne({ genero: "salsa" });

                // Verify that the method does what we expected
                assert.equal(newBooks.genero, "salsa");
            });
            it('can create a comment in a Recom', () => {
                // Find the internal implementation of the task method so we can
                // test it in isolation
                const update = Meteor.server.method_handlers['recoms.addComment'];

                // Set up a fake method invocation that looks like what the method expects
                const invocation = { userId };

                // Run the method with `this` set to the fake invocation
                update.apply(invocation, [booksId,"comentario"]);

                let newBooks = Recoms.findOne({ comments: "comentario" });

                // Verify that the method does what we expected
                assert.equal(newBooks.comments, "comentario");
            });
            it('can delete a Recom', () => {
                // Find the internal implementation of the task method so we can
                // test it in isolation
                const deleteBooks = Meteor.server.method_handlers['recoms.remove'];

                // Set up a fake method invocation that looks like what the method expects
                const invocation = { userId };

                // Run the method with `this` set to the fake invocation
                deleteBooks.apply(invocation, [booksId]);

                // Verify that the method does what we expected
                assert.equal(Recoms.find().count(), 0);
            });
        });
    });}