import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 p-4 text-center mt-auto">
      <div className="container mx-auto">
        <p>&copy; 2025 TaskApp. Todos os direitos reservados.</p>
        <p>Construído com React, TypeScript e Tailwind CSS</p>
      </div>
    </footer>
  );
};
