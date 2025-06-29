const Producto = require('../models/producto');

// GET /api/productos
exports.getAll = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.json(productos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /api/productos/:codProducto
exports.getOne = async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.codProducto);
    if (!producto) return res.status(404).json({ message: 'No encontrado' });
    res.json(producto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /api/productos
exports.create = async (req, res) => {
  try {
    const nuevo = await Producto.create(req.body);
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT /api/productos/:codProducto
exports.update = async (req, res) => {
  try {
    const [filas] = await Producto.update(req.body, {
      where: { codProducto: req.params.codProducto },
    });
    if (filas === 0) return res.status(404).json({ message: 'No encontrado' });
    res.json({ message: 'Actualizado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE /api/productos/:codProducto
exports.remove = async (req, res) => {
  try {
    const filas = await Producto.destroy({
      where: { codProducto: req.params.codProducto },
    });
    if (!filas) return res.status(404).json({ message: 'No encontrado' });
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
