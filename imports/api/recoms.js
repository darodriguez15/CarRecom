import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';


export const Recoms = new Mongo.Collection('recoms');

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('recoms', function tasksPublication() {
        return Recoms.find();
    });
}

Meteor.methods({
    'recoms.insert'(text) {
        check(text, String);

        // Make sure the user is logged in before inserting a task
        if (!Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        Recoms.insert({
            imagen: "https://cdn3.iconfinder.com/data/icons/car-icons-front-views/480/Sports_Car_Front_View-512.png",
                text,
                privado:false,
                genero: "",
                idioma: "",
                colaboradores:"m",
                texto: "",
                likesC: 3,
                dislikesC: 0,
                likesP: 0,
                dislikesP: 0,
                likesS: 0,
                dislikesS: 0,
                comments: "",
                mG: "hidden",
                mL: "hidden",
                mI: "hidden",
                busquedaH: "",
                usuarioBuscado: "",
                botonBusqueda: "hidden",
                owner: Meteor.userId(),           // _id of logged in user
                username: Meteor.user().username,  // username of logged in user
        });
    },
    'recoms.remove'(bookId) {
        check(bookId, String);

        Recoms.remove(bookId);
    },
    'recoms.addColaborador'(bookId, textvi, text) {
        nText = (textvi + " " + text);
        Recoms.update(bookId, {
            $set: { colaboradores: nText , privado:true },
        });
    },
    'recoms.limpiarBuscado'(bookId) {
        Recoms.update(bookId, {
            $set: { usuarioBuscado: "" },
        });
    },
    'recoms.setChecked'(bookId, setChecked) {
        check(bookId, String);
        check(setChecked, Boolean);

        Recoms.update(bookId, { $set: { checked: setChecked } });
    },
    'recoms.editarGenre'(bookId, text) {
        check(bookId, String);
        Recoms.update(bookId, {
            $set: {
                genero: text,
                mG: "hidden"
            }
        });
    },
    'recoms.usubuscado'(bookId, text) {
        check(bookId, String);
        Recoms.update(bookId, {
            $set: { usuarioBuscado: text }
        });
    },
    'recoms.mostrarGenero'(bookId) {
        check(bookId, String);
        Recoms.update(bookId, {
            $set: { mG: "" }
        });
    },
    'recoms.salirBusqueda'(bookId) {
        Recoms.update(bookId, {
            $set: { busquedaH: "hidden" },
        });
    },
    'recoms.mostrarIdioma'(bookId) {
        Recoms.update(bookId, {
            $set: { mL: "" },
        });
    },
    'recoms.editarLan'(bookId, text) {
        Recoms.update(bookId, {
            $set: {
                idioma: text,
                mL: "hidden"
            },
        });
    },
    'recoms.editarStory'(bookId, textvi, text) {
        nText = (textvi + " " + text);
        Recoms.update(bookId, {
            $set: { texto: nText },
        });
    },
    'recoms.darLikeC'(bookId, likes, nLikes ) {
        Recoms.update(bookId, {
             $set: { likesC: nLikes },
         });
    },
    'recoms.darDislikeC'(bookId, dLikes, nDlikes) {
        Recoms.update(bookId, {
                $set: { likesC: nDlikes },
            });
        
    },
    'recoms.darLikeP'(bookId, likes, nLikes) {
        Recoms.update(bookId, {
            $set: { likesP: nLikes },
        });
    },
    'recoms.darDislikeP'(bookId, dLikes, nDlikes) {
        Recoms.update(bookId, {
            $set: { likesP: nDlikes },
        });

    },
    'recoms.darLikeS'(bookId, likes, nLikes) {
        Recoms.update(bookId, {
            $set: { likesS: nLikes },
        });
    },
    'recoms.darDislikeS'(bookId, dLikes, nDlikes) {
        Recoms.update(bookId, {
            $set: { likesS: nDlikes },
        });

    },
    'recoms.addComment'(bookId, nText) {
        Recoms.update(bookId, {
            $set: { comments: nText },
        });
    },
    'recoms.cambiarImagen'(bookId, text) {
        Recoms.update(bookId, {
            $set: {
                imagen: text,
                mI: "hidden"
            },
        });
    },
    'recoms.mostrarImagen'(bookId) {
        Recoms.update(bookId, {
            $set: { mI: "" },
        });
    },
    'recoms.paila'(bookId) {
        Recoms.update(bookId, {
            $set: {
                busquedaH: "",
                botonBusqueda: "hidden"
            },
        });
    },
    'recoms.fore'(bookId) {
        Recoms.update(bookId, {
            $set: {
                busquedaH: "hidden"
            },
        });
    },
    'recoms.fore2'(bookId) {
        Recoms.update(bookId, {
            $set: {
                busquedaH: "",
                botonBusqueda: ""
            },
        });
    }
});