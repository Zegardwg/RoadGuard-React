const getUser = async () => {
    try {
        const response = await axiosInstance.get('/user');
        console.log('Data user:', response.data);
    } catch (error) {
        console.error('Gagal mengambil data user:', error.response.data);
    }
};

// Contoh penggunaan:
getUser();
