const Rashi = require("./rashiModel");

exports.getAllRashis = async (req, res) => {
  const rashis = await Rashi.find();

  res.status(200).json({
    status: "success",
    size: rashis.length,
    data: {
      rashis
    }
  })
}

exports.getRashiById = async (req, res) => {
  const id = req.params.Id;
  const rashi = await Rashi.findById(id);

  res.status(200).json({
    status: "success",
    data: {
      rashi
    }
  })
}