const { User } = require("../../models/user");
const fs = require("fs/promises");
const path = require("path");
const { RequestError } = require("../../helpers");

const avatarDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async(req, res) => {
	try {
		const { _id } = req.user;
		const { path: temUpload, originalname } = req.file;
		const extention = originalname.split(".").pop();
		const fileName = `${_id}.${extention}`;
		const resultUpload = path.join(avatarDir, fileName);
		await fs.rename(temUpload, resultUpload);
		const avatarURL = path.join("avatar", fileName);
		await User.findByIdAndUpdate(_id, {avatarURL});
		
		res.status(200).json({
			avatarURL,
		})
	} catch (error) {
		await fs.unlink(req.file.path);
		throw new RequestError(401, "Not authorized");
	}
}

module.exports = updateAvatar;