const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Alex Chen. All rights reserved.
        </div>
        <div className="text-sm text-muted-foreground">
          Built with passion and <span className="text-primary">creativity</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
