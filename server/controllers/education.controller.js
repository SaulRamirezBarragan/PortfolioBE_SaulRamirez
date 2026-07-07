import Education from "../models/education.model.js";
import extend from "lodash/extend.js";
import errorHandler from "./error.controller.js";
const create = async (req, res) => {
  const education = new Education(req.body);
  try {
    await education.save();
    return res.status(200).json({
      message: "Education Created",
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
const list = async (req, res) => {
  try {
    let educations = await Education.find().select("title firstname lastname email completion description");
    res.json(educations);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
const educationByID = async (req, res, next, id) => {
  try {
    let education = await Education.findById(id);
    if (!education)
      return res.status(400).json({
        error: "Education not found",
      });
    req.profile = education;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve education",
    });
  }
};
const read = (req, res) => {
  return res.json(req.profile);
};
const update = async (req, res) => {
  try {
    let education = req.profile;
    education = extend(education, req.body);
    education.updated = Date.now();
    await education.save();
    res.json(education);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
const remove = async (req, res) => {
  try {
    let education = req.profile;
    let deletedEducation = await education.deleteOne();
    return res.status(200).json({
        message: "Education deleted"
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const removeAll = async (req, res) => {
  try {
    const result = await Education.deleteMany({});

    return res.status(200).json({
      message: `${result.deletedCount} educations deleted`
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

export default { create, educationByID, read, list, remove, update, removeAll };