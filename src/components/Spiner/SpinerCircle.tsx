import React from 'react';
import { Spin, Alert } from 'antd';

const SpinerCircle: React.FC = () => (
  <Spin tip="Cargando..." size="large">
    <Alert
      message="Obteniendo información"
      description="Espera unos segundos mientras carga la página"
      type="info"
    />
  </Spin>
);

export default SpinerCircle;