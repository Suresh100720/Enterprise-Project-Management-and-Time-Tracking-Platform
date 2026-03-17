export const usePermissions = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const role = user?.role || "TeamMember";

  return {
    role,

    isSuperAdmin: role === "SuperAdmin",
    isOrgAdmin: role === "OrganizationAdmin",
    isProjectManager: role === "ProjectManager",
    isTeamMember: role === "TeamMember",
    isClient: role === "Client",

    // Permissions
    canManageUsers: role === "SuperAdmin" || role === "OrganizationAdmin",
    canManageTeams: role === "OrganizationAdmin" || role === "ProjectManager",
    canCreateProjects: role !== "Client",
    canDeleteProjects: role === "OrganizationAdmin",
  };
};