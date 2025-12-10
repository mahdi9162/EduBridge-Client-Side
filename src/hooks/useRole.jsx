import React, { useEffect, useState } from 'react';

const useRole = () => {
  const [role, setRole] = useState(null);
  const [verify, setVerify] = useState(null);
  const [roleLoading, setRoleLoading] = useState(true);

  useEffect(() => {
    const storedRole = localStorage.getItem('user-type');
    const storedToken = localStorage.getItem('access-token');

    if (storedRole && storedToken) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setRole(storedRole);
      setVerify(storedToken);
    }

    setRoleLoading(false);
  }, []);

  return { role, verify, roleLoading };
};

export default useRole;
