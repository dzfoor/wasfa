import Api from '@/plugins/Api';

export default {
    register (credentials){
        return Api().post('signup', credentials);
    }
}
