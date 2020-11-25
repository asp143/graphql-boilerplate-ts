import bcrypt from 'bcrypt';

const SALT_ROUND = parseInt(process.env.SALT_ROUND || '10');

export const encrypt = (plainPassword:string): string => {
    const SALT = bcrypt.genSaltSync(SALT_ROUND);
    const HASH = bcrypt.hashSync(plainPassword, SALT);
    return HASH;
};

export const decrypt = (password: string, hash: string): boolean => bcrypt.compareSync(password, hash);

