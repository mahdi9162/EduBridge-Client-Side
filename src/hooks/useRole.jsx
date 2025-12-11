import React, { useEffect, useState } from 'react';

const useRole = () => {
  const [role, setRole] = useState(null);
  const [roleLoading, setRoleLoading] = useState(true);

  useEffect(() => {
    const storedRole = localStorage.getItem('user-type');

    if (storedRole) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setRole(storedRole);
    }

    setRoleLoading(false);
  }, []);

  return { role, roleLoading };
};

export default useRole;
