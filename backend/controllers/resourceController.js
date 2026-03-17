export const allocateResource = async (req, res) => {
  try {

    const { user, project } = req.body;

    const allocationData = {
      user,
      project,
      allocatedAt: new Date()
    };

    res.json({
      message: "Resource allocated successfully",
      allocation: allocationData
    });

  } catch (error) {

    res.status(500).json({
      message: "Resource allocation failed"
    });

  }
};