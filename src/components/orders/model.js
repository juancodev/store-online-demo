import admin from 'firebase-admin';
import {getFirestore} from 'firebase-admin/firestore';
import {app} from '../../firebase/index.js';

export const db = getFirestore(admin.apps[app]);
